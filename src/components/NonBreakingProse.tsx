import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SHORT_WORDS = [
  // English articles.
  'a', 'an', 'the',
  // English prepositions.
  'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid',
  'among', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath',
  'beside', 'besides', 'between', 'beyond', 'by', 'concerning', 'considering',
  'despite', 'down', 'during', 'except', 'excluding', 'following', 'for',
  'from', 'in', 'inside', 'into', 'like', 'near', 'of', 'off', 'on', 'onto',
  'opposite', 'outside', 'over', 'past', 'per', 'regarding', 'round', 'since',
  'than', 'through', 'throughout', 'till', 'to', 'toward', 'towards', 'under',
  'underneath', 'unlike', 'until', 'up', 'upon', 'via', 'with', 'within',
  'without',
  // English conjunctions and short auxiliary verbs.
  'and', 'because', 'but', 'if', 'nor', 'once', 'or', 'so', 'that', 'though',
  'unless', 'when', 'whenever', 'where', 'whereas', 'wherever', 'whether',
  'while', 'yet', 'am', 'are', 'be', 'been', 'being', 'can', 'could', 'did',
  'do', 'does', 'had', 'has', 'have', 'is', 'may', 'might', 'must', 'shall',
  'should', 'was', 'were', 'will', 'would', 'I',
  // Russian articles do not exist; keep short prepositions, conjunctions and particles.
  'а', 'без', 'близ', 'в', 'вместо', 'вне', 'внутри', 'во', 'возле', 'вокруг',
  'впереди', 'вследствие', 'да', 'для', 'до', 'же', 'за', 'и', 'из', 'из-за',
  'из-под', 'или', 'к', 'как', 'ко', 'кроме', 'ли', 'меж', 'между', 'мимо',
  'на', 'над', 'не', 'ни', 'но', 'о', 'об', 'обо', 'около', 'от', 'перед',
  'по', 'под', 'после', 'при', 'про', 'ради', 'с', 'сквозь', 'со', 'среди',
  'так', 'у', 'через', 'что',
];

const escapedShortWords = [...SHORT_WORDS]
  .sort((left, right) => right.length - left.length)
  .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

const shortWordPattern = new RegExp(
  `(?<![\\p{L}\\p{N}])(${escapedShortWords.join('|')})\\s+(?=[\\p{L}\\p{N}«“„"'])`,
  'giu',
);

export function keepShortWordsWithNext(text: string) {
  return text.replace(shortWordPattern, '$1\u00a0');
}

function formatProse() {
  const proseRoots = document.querySelectorAll<HTMLElement>('[data-typography="prose"]');

  proseRoots.forEach((root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('[data-typography-ignore], code, pre')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let node = walker.nextNode();

    while (node) {
      const currentText = node.nodeValue ?? '';
      const formattedText = keepShortWordsWithNext(currentText);

      if (formattedText !== currentText) node.nodeValue = formattedText;
      node = walker.nextNode();
    }
  });
}

export default function NonBreakingProse() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    formatProse();
  }, [pathname]);

  return null;
}
