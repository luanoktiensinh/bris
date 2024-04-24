import { GlobalModalContents } from "@/components/GlobalModal/GlobalModal.type";

type PropUpdate<T extends object> = {
    [K in keyof T]: { type: K; props: T[K] }
  }[keyof T];

export type ModalStateConfig = PropUpdate<GlobalModalContents>

export interface ModalState {
    show: boolean,
    config?: ModalStateConfig
}