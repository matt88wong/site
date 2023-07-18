export interface ButtonProps {
    label: string
    onClick?: () => {};
    iconLink?: string;
    size?: string;
    target?: '_blank';
    type?: 'regular' | 'offset' | 'fill' | 'slide';
    href?: string;
}