import {ButtonHTMLAttributes, FC} from 'react'
import {VariantProps,cva} from 'class-variance-authority'
import { cn } from './utils'
interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{};
const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-md',
  // "",
  {
    variants:{
      variant:{
        default:"bg-slate-900 border border-black-200 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        outline:"bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700"
      },
      size:{
        default:"h-10 py-2 px-4",
        sm:"h-9 px-2 rounded-md"
      }
    },
    defaultVariants:{
      variant:"default",
      size:"default"
    }
  }
)
 const Button:FC<buttonProps> = ({children,className,size,variant,...props}) => {
  return (
    <button className={cn(buttonVariants({size,variant,className}))}{...props}>{children}</button>
  )
}
export {Button,buttonVariants};
