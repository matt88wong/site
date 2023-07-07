export interface ButtonProps {
    label: string
    onClick?: () => {};
    iconLink?: string;
    size?: string;
    target?: '_blank';
    type?: 'regular' | 'offset' | 'raise';
    href?: string;
}