export default function ColorBox({ color, type = 'bg', children }: { color: string, type: 'bg' | 'text', children?: React.ReactNode }) {
    return (
        <span style={{
            backgroundColor: type === 'bg' ? color : 'transparent',
            color: type === 'text' ? color : '#fff',
            padding: type === 'bg' ? '0px 8px' : '0px',
            borderRadius: '6px',
            display: 'inline-block',
            minWidth: type === 'bg' ? '100px' : '0px',
            textAlign: 'center',
        }}>
            {type === 'bg' ? color : children}
        </span>
    );
}
