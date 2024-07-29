export interface ModalProps {
    children: React.ReactNode;
    variant: "primary" | "secondary";
    isOpen?: boolean;
    toogleModal?: () => void;
    width?: string;
    height?: string;
}