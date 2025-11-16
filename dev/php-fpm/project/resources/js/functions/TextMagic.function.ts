import DOMPurify from 'dompurify';

enum MODES {
    NORMAL
};

function transformText(text: string): string {
    const transformedText = machine(text, MODES.NORMAL);
    
    return transformedText;
}

function machine(text: string, modes: MODES): string {
    
    const firstTransformation = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-bold">$1</span>');
    
    return DOMPurify.sanitize(firstTransformation);
}

export default { transformText };