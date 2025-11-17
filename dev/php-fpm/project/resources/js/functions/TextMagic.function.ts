import DOMPurify from 'dompurify';

function transformText(text: string): string {
    const transformedText = machine(text);
    
    return transformedText;
}

function machine(text: string): string {
    
    const firstTransformation = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-bold">$1</span>');
    
    return DOMPurify.sanitize(firstTransformation);
}

export default { transformText };