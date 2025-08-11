# Surgery Board Prep App

This is a minimal command line tool that lets general surgery residents practice oral board scenarios. Each run randomly selects a scenario and saves a simple score based on keywords found in the response. A dashboard command aggregates the scores by subject so you can track progress over time.

## Usage

From this folder run:

```bash
npm start
```

Answer the scenario prompt. Your score will be stored in `results.json`.

To see your overall progress run:

```bash
npm run dashboard
```

## Testing

Run the unit tests with:

```bash
npm test
```
