import { toast } from "sonner";

export const ErrorToast = (title: string, description: string) => {
  toast.error(title, {
    description: (
      <div className="mt-1 min-w-[300px] w-full bg-red-300">
        <div className="text-white text-sm dark:text-slate-950">
          {description}
        </div>
      </div>
    ),
  });
};
export const SuccessToast = (title: string, description: string) => {
  toast.success(title, {
    description: (
      <pre className="mt-1 min-w-[300px] w-full bg-lime-400 p-2">
        <code className="text-slate-950 dark:text-slate-950 text-sm">
          {description}
        </code>
      </pre>
    ),
  });
};
