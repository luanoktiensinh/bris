import { GlobalModalContents } from "@/components/GlobalModal/GlobalModal.type";

export type ModalStateConfig = PropUpdate<GlobalModalContents>

export interface ModalState {
    show: boolean,
    config?: ModalStateConfig
}