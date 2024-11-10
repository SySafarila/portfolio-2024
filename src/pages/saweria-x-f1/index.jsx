import { useRouter } from "next/router";
import { useEffect } from "react";

const SaweriaF1 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("https://github.com/SySafarila/Saweria-Formula-1-Radio");
    }, 3000);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default SaweriaF1;
