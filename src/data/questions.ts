import Papa from 'papaparse';
import { Question } from '../types/quiz';

export const parseCSV = async (filePath: string): Promise<Question[]> => {
  const response = await fetch(filePath);
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const questions: Question[] = result.data.map((row: any, index: number) => ({
          id: index + 1,
          text: row.text,
          options: [row.options1, row.options2, row.options3, row.options4],
          correctAnswer: parseInt(row.correctAnswer, 10) - 1,
          explanation: row.explanation,
          explanationImage: row.explanationImage || undefined,
        }));
        resolve(questions);
      },
      error: (error: Error) => reject(error),
    });
  });
};

export const getDemoQuestions = () => parseCSV('/data/demoQuestion.csv');
export const getAdultQuestions = () => parseCSV('/data/Question.csv');