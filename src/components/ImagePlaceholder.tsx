import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export const ImagePlaceholder = ({ label, className = '' }: ImagePlaceholderProps) => (
  <div className={`bg-secondary flex flex-col items-center justify-center text-muted-foreground gap-3 ${className}`}>
    <ImageIcon size={48} strokeWidth={1} />
    <span className="text-sm font-heading uppercase tracking-widest">{label}</span>
  </div>
);
