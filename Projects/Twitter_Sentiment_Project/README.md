# Twitter Sentiment Project

This repository contains code, data, and a small frontend dashboard for performing and exploring sentiment analysis on Twitter data.

## Project Overview

- Full end-to-end sentiment analysis pipeline using classical ML and ML-augmented features.
- A Jupyter notebook (`code_sentiment_analysis.ipynb`) demonstrates data loading, preprocessing, feature engineering, model training, and evaluation.
- Data CSVs for training, testing, and final submission are included in the repository root.
- A lightweight frontend dashboard (built with Vite + React) visualizes analytics and model outputs.

## Repository Structure

- `code_sentiment_analysis.ipynb` - Analysis notebook used to train and evaluate models.
- `ULTRA_CLEAN_train.csv` - Cleaned training dataset (CSV).
- `ULTRA_CLEAN_test.csv` - Cleaned test dataset (CSV).
- `FINAL_sub_xgb_w2v.csv` - Example final submission / predictions (CSV).
- `frontend-dashboard/` - Frontend dashboard source (Vite + React). Run separately (see below).

## Quickstart

Prerequisites:

- Node.js 16+ (for the frontend)
- Python 3.8+ (for the notebook and ML code)

To run the frontend dashboard (development):

1. Open a terminal and change to the frontend folder:

```bash
cd frontend-dashboard
```

2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

3. Open the address shown by Vite (default: `http://localhost:5173`).

To run the analysis notebook (Python):

1. (Optional) Create and activate a virtual environment:

```bash
python -m venv .venv
.
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
# Windows cmd
\.venv\Scripts\activate.bat
# macOS / Linux
source .venv/bin/activate
```

2. Install essential Python packages (adjust as needed):

```bash
pip install jupyter pandas numpy scikit-learn xgboost gensim matplotlib seaborn
```

3. Launch Jupyter and open `code_sentiment_analysis.ipynb`:

```bash
jupyter lab
```

## Data Description

- `ULTRA_CLEAN_train.csv`: cleaned training examples with labels for supervised training.
- `ULTRA_CLEAN_test.csv`: cleaned test examples for prediction/validation.
- `FINAL_sub_xgb_w2v.csv`: sample predictions from an XGBoost + Word2Vec pipeline.

Do not add large raw data or models to the repo. Keep sensitive API keys out of version control.

## Frontend Notes

- The frontend is implemented with Vite and React in the `frontend-dashboard` folder.
- Static analytics data used by the app is under `frontend-dashboard/src` (e.g., `dashboard_analytics.json`).
- To build for production:

```bash
cd frontend-dashboard
npm run dev
# npm run build
```

Then serve the `dist` output with a static server of your choice.

## Contributing

- Use feature branches and open PRs for review.
- Document dataset provenance and preprocessing steps in the notebook or a separate `docs/` file if added.

## License & Contact

This project currently has no explicit license file. Add a `LICENSE` if you intend to publish under a particular license.

For questions or help, open an issue or contact the repository owner.
