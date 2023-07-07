export interface ButtonProps {
    label: string
    onClick?: () => {};
    iconLink?: string;
    size?: 'small' | 'medium' | 'large';
    style?: 'regular' | 'offset' | 'raise';
    target?: '_blank';
    href?: string;
}