import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type TooltipWrapperProps = {
  children: React.ReactNode;
  tips: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
};

export default function TooltipWrapper({
  children,
  tips,
  side,
  sideOffset,
}: Readonly<TooltipWrapperProps>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          {tips}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
