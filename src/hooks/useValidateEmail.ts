const useValidateEmail = () => {
  const forbiddenEmailDomains =
    import.meta.env.VITE_FORBIDDEN_EMAIL_DOMAINS?.split(",") || [];

  const validate = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    const domain = email?.split("@")[1];
    if (forbiddenEmailDomains?.includes(domain)) return false;
    return true;
  };

  return { validate };
};

export default useValidateEmail;
