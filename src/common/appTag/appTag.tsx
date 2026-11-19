import { Badge } from "@/components/ui/badge";

export interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <Badge
      variant="outline"
      className="rounded-full font-normal text-slate-600"
    >
      {label}
    </Badge>
  );
}
