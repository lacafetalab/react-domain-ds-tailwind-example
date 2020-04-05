import _domain from "_domain";
import { useEffect, useState } from "react";

export type StatusType = "idle" | "pending" | "success" | "error";
export type DomainType = typeof _domain;
export type RunType = (domain: DomainType) => Promise<any>;

const useDomain = ({
  initRun,
  initState = null,
}: {
  initRun?: RunType;
  initState?: any;
} = {}) => {
  const [data, setData] = useState(initState);
  const [status, setStatus] = useState<StatusType>("idle");
  const [error, setError] = useState<any>(null);

  const executeUseCase = async (run: RunType) => {
    setStatus("pending");
    setError(null);

    try {
      const responseData = await run(_domain);
      if (responseData) {
        setStatus("success");
        setData(responseData);
      } else {
        setStatus("error");
        setError("error");
      }
    } catch (e) {
      setStatus("error");
      setError(e);
    }
  };

  useEffect(() => {
    if (initRun) executeUseCase(initRun);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    status,
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "error",
    isSuccess: status === "success",
    error,
    data,
    run: executeUseCase,
  };
};

export default useDomain;
