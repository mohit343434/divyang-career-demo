import React from 'react';
import msg1 from '../../assets/msg1.jpeg';
import msg2 from '../../assets/msg2.jpeg';
import msg3 from '../../assets/msg3.jpg';
import msg4 from '../../assets/msg4.jpeg';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import LayoutWraper from '@/src/layout/LayoutWraper';
const MessageBy = () => {
  const messages = [
    { id: 1, image: msg1 },
    { id: 2, image: msg2 },
    { id: 3, image: msg3 },
    { id: 4, image: msg4 }
  ];
  return (
    <LayoutWraper>
      <div className='flex flex-col items-center md:p-10 py-4'>
        <h1 className='text-2xl md:py-10 py-5'>Message By</h1>
        <div className='flex items-center gap-9 overflow-x-auto'>
          {messages.map(message => (
            <Dialog key={message.id} >
              <DialogTrigger asChild>
                <img key={message.id} src={message.image} className='w-64 h-80 ' />
              </DialogTrigger>
              <DialogContent className="">
                <img key={message.id} src={message.image} className='w-[450px] h-[650px]' />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </LayoutWraper>
  );
}
export default MessageBy;
<Dialog>
  <DialogTrigger asChild>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
  </DialogContent>
</Dialog>












