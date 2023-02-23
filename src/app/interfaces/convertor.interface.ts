export interface IConvertorInterface {
  "success": boolean,
  "query": {
    "from": string,
    "to": string,
    "amount": number
  },
  "info": {
    "timestamp": number,
    "rate": number
  },
  "date": string,
  "result": number
}