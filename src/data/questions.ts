import questionCSV from './Question.csv';
import Papa from 'papaparse';
import { Question } from '../types/quiz';

export function loadQuestions(): Question[] {
  const parsed = Papa.parse(questionCSV, { header: true }).data;
  return parsed.map((row: any) => ({
    text: row.text,
    options: [row.options1, row.options2, row.options3, row.options4],
    correctAnswer: Number(row.correctAnswer),
    explanation: row.explanation,
    explanationImage: row.explanationImage || '',
  }));
}

export function loadDemoQuestions(): Question[] {
  return loadQuestions().slice(0, 5);
}