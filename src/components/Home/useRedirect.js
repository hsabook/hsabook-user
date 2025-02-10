import { usePathname, useRouter } from "next/navigation";

const useRedirect = () => {
  const router = useRouter();
  const currentPathName = usePathname();
  const redirect = (pathName) => {
    if (pathName === currentPathName) {
      router.refresh();
    }
    router.push(pathName);
  };

  return { redirect };
};

export default useRedirect;