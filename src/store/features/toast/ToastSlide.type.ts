import { ToastContents } from "@/components/Toast/Toast.type";

export type ToastStateConfig = PropUpdate<ToastContents> & {
    timeout?: number
}

export interface ToastState {
    show: boolean,
    config?: ToastStateConfig 
}