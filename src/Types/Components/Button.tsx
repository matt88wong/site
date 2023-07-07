export interface ButtonProps {
    label: string
    onClick?: () => {};
    iconLink?: string;
    size?: 'small' | 'medium' | 'large';
    target?: '_blank';
    type?: 'regular' | 'offset' | 'raise';
    href?: string;
}