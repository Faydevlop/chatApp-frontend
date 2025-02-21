import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/auth/login"); // Redirect if not authenticated
      }
    }, [isAuthenticated, router]);

    // ✅ Prevent rendering only if not authenticated & on protected routes
    if (!isAuthenticated) return null;

    return <WrappedComponent {...props} />;
  };

  AuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return AuthComponent;
};

export default withAuth;
