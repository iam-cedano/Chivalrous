import DOMPurify from 'dompurify';

function transformText(text: string): string {
    const transformedText = machine(text);
    
    return transformedText;
}

function machine(text: string): string {
    
    const firstTransformation = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-bold">$1</span>');
    const secondTransformation = firstTransformation.replace(/(?:\r\n|\r|\n|\u0085|\u2028|\u2029)/g, '<br/>');
    
    return DOMPurify.sanitize(secondTransformation);
}

function extractEmojis(text: string) {
    return text.match(/\p{Emoji}+/gu) ?? '💻';
}

export default { transformText, extractEmojis };