# 🌐 Sumit Kumar Karn — Portfolio

A modern, responsive portfolio built with **React, TypeScript, Vite, and Tailwind CSS** to showcase my work in **Data Analytics, Data Science, Machine Learning, and Business Intelligence**.

The portfolio supports two role-focused views so recruiters can quickly see the skills and projects most relevant to the role.

## 🚀 Live Demo

**Portfolio:** Add your deployed portfolio URL here.

### Role-focused views

- **Data Analytics:** `/?role=analytics`
- **Data Science:** `/?role=data-science`

For example:

```text
https://your-domain.com/?role=analytics
https://your-domain.com/?role=data-science
```

---

## ✨ Features

- Responsive design for desktop, tablet, and mobile
- Role-focused **Data Analytics** and **Data Science** portfolio views
- Project showcase with direct GitHub repository links
- Skills and technology sections
- Certifications and education sections
- Interactive navigation and smooth UI animations
- Data analytics workflow / pipeline presentation
- Contact and social links
- Resume-focused positioning for entry-level roles

---

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Motion / Framer Motion-style animations
- Lucide React / React Icons

### Data & Analytics

- Python
- SQL / MySQL
- Pandas
- NumPy
- Statistics
- Exploratory Data Analysis (EDA)
- Power BI
- DAX
- Data Visualization

### Machine Learning

- Scikit-learn
- Regression & Classification
- Random Forest
- Gradient Boosting / XGBoost
- Isolation Forest
- Feature Engineering
- Model Evaluation
- SHAP Explainable AI

---

## 📊 Featured Projects

### 1. Cloud Cost Intelligence — Cloud Cost Analytics & ML Platform

An end-to-end cloud cost analytics solution covering **data cleaning, SQL analysis, EDA, feature engineering, forecasting, anomaly detection, Power BI dashboards, and Streamlit analytics**.

- Identifies cloud cost drivers and unusual spending patterns
- Performs weekly cost forecasting
- Uses Isolation Forest with business rules for anomaly detection
- Provides KPI monitoring and cost optimization insights

🔗 **GitHub:** https://github.com/Sumit006-coder-dotcom/cloud-cost-intelligence

### 2. E-Commerce Customer Review Prediction — ML & Analytics

An end-to-end classification project using order, payment, product, and delivery data to predict **Good/Bad customer reviews**.

- Data cleaning, EDA, SQL analysis, and feature engineering
- Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, and XGBoost
- Random Forest achieved **85.26% accuracy, 91.04% F1-score, and 79.92% ROC-AUC**
- Prediction pipeline deployed with Streamlit

🔗 **GitHub:** https://github.com/Sumit006-coder-dotcom/E-Commerce-Customer-Review-Prediction

### 3. UPI Fraud Shield — Fraud Analytics & Explainable AI

An end-to-end fraud analytics and machine learning solution using transactional, behavioral, authentication, and account-level features.

- Data cleaning, EDA, aggregation, correlation, and fraud-pattern analysis
- Transaction trend, fraud-rate, user-behavior, and risk analysis
- Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, and MLP
- SHAP-based Explainable AI, fraud probability scoring, prediction history, and Streamlit analytics

🔗 **GitHub:** https://github.com/Sumit006-coder-dotcom/UPI-Fraud-Shield-ML

---

## 📂 Project Structure

```text
sumit-portfolio/
│
├── src/
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── declarations/
│   │   │   ├── portfolioData.ts
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── index.html
│   │   ├── index.css
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   │
│   └── backend/
│
├── README.md
└── .gitignore
```

---

## ⚙️ How to Run Locally

### Prerequisites

Install:

- **Node.js (LTS)**
- **npm**
- Git (optional, if cloning the repository)

Check your installation:

```bash
node -v
npm -v
```

### 1. Clone the repository

Replace the URL below with the URL of this portfolio repository:

```bash
git clone https://github.com/your-username/your-portfolio-repository.git
```

Then enter the project directory:

```bash
cd your-portfolio-repository
```

### 2. Go to the frontend directory

The React application is inside `src/frontend`:

```bash
cd src/frontend
```

### 3. Install dependencies

This project currently contains a Vite peer-dependency mismatch with `vite-plugin-environment`. Use the following command:

```bash
npm install --legacy-peer-deps
```

> **Important:** `--legacy-peer-deps` is currently required for this project because npm may otherwise stop with an `ERESOLVE` dependency-tree error.

### 4. Start the development server

```bash
npm run dev
```

Vite will show a local URL, normally:

```text
http://localhost:5173/
```

Open that URL in your browser.

### 5. Open the Data Analytics version

```text
http://localhost:5173/?role=analytics
```

### 6. Open the Data Science version

```text
http://localhost:5173/?role=data-science
```

### 7. Create a production build

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

### 8. Preview the production build locally

```bash
npm run preview
```

---

## 🔧 Useful Commands

| Command | Purpose |
|---|---|
| `npm install --legacy-peer-deps` | Install project dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build the production version |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | Check TypeScript types |
| `npm run check` | Run Biome code checks |
| `npm run fix` | Automatically fix supported Biome issues |

---

## 👨‍💻 About Me

I am **Sumit Kumar Karn**, a BCA (Hons. with Research) student focused on building practical solutions in **Data Analytics, Data Science, Machine Learning, and Business Intelligence**.

My work focuses on turning raw data into useful insights through **SQL, Python, EDA, statistics, visualization, predictive modeling, anomaly detection, and interactive dashboards**.

---

## 📜 Certifications

- **Complete Data Science & Machine Learning Bootcamp (99 hrs) — Udemy**
- **AWS Academy Machine Learning Foundations — AWS Academy**

---

## 📫 Contact

- **Email:** sumitkarn2005@gmail.com
- **Phone:** +91 8826739429
- **GitHub:** https://github.com/Sumit006-coder-dotcom
- **LinkedIn:** https://www.linkedin.com/in/sumit-karn-86606524a/

---

## ⭐ Support

If you find this portfolio useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is available under the **MIT License**.
