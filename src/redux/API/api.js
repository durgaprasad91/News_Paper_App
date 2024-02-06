export const baseUrl =`https://newsapi.org/v2/top-headlines?country=in`
export const apiKey = "52ad66ec118f4cbc9d78b878a5abf539";

export const cultureApiUrl = `${baseUrl}&apiKey=${apiKey}`;
export const healthApiUrl = `${baseUrl}&category=health&apiKey=${apiKey}`;
export const scienceApiUrl = `${baseUrl}&category=science&apiKey=${apiKey}`;
export const sportsApiUrl = `${baseUrl}&category=sports&apiKey=${apiKey}`;
export const technologyApiUrl = `${baseUrl}&category=technology&apiKey=${apiKey}`;

// export const allapi =`https://newsapi.org/v2/everything?q=tesla&from=2024-01-06&sortBy=publishedAt&apiKey=52ad66ec118f4cbc9d78b878a5abf539`