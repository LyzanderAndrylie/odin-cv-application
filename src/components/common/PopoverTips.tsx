import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { IoInformationCircleSharp } from 'react-icons/io5';

type PopoverTipsProps = {
  tips: string;
};

export default function PopoverTips({ tips }: Readonly<PopoverTipsProps>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-4 w-4 p-0">
          <IoInformationCircleSharp size={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 text-sm" side="top">
        {tips}
      </PopoverContent>
    </Popover>
  );
}
