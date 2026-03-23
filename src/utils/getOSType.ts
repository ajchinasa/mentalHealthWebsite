import { useEffect, useState } from "react";

export const getOSType = (): string => {
  const userAgent = window.navigator.userAgent;

  if (/Windows NT/.test(userAgent)) return "Windows";
  if (/Macintosh/.test(userAgent)) return "macOS";
  if (/Linux/.test(userAgent)) return "Linux";
  if (/Android/.test(userAgent)) return "Android";
  if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS";

  return "Unknown";
};

export const useOSType = (): string => {
  const [osType, setOSType] = useState<string>("Unknown");

  useEffect(() => {
    setOSType(getOSType());
  }, []);

  return osType;
};
