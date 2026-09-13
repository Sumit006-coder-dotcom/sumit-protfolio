export type PortfolioRole = "analytics" | "data-science";

export function getPortfolioRole(): PortfolioRole {
  const params = new URLSearchParams(window.location.search);
  return params.get("role") === "data-science" ? "data-science" : "analytics";
}

export const profile = {
  name: "Sumit Karn",
  email: "sumitkarn2005@gmail.com",
  phone: "8826739429",
  linkedin: "https://www.linkedin.com/in/sumit-karn-86606524a",
  github: "https://github.com/Sumit006-coder-dotcom",
};

export const roleContent = {
  analytics: {
    label: "Data Analytics Portfolio",
    eyebrow: "Data Analyst · Python · SQL · Power BI",
    tagline: "Turning raw data into actionable insights — cost analytics, fraud analytics, and interactive dashboards.",
    summary:
      "Aspiring Data Analyst with hands-on experience in Python, SQL, Pandas, NumPy, statistics, EDA, Power BI, and business analytics. Skilled in cleaning and transforming data, developing KPIs, identifying trends and anomalies, and communicating insights through dashboards.",
    aboutHighlights: [
      "Python, SQL, Pandas, NumPy, EDA and data cleaning",
      "Power BI, DAX, KPI analysis and interactive dashboards",
      "Business-focused analysis of costs, transactions, fraud and customer behavior",
    ],
    stats: [
      { value: "3", label: "Analytics Projects" },
      { value: "2", label: "Certifications" },
      { value: "Power BI", label: "BI Tool" },
      { value: "SQL + Python", label: "Core Stack" },
    ],
  },
  "data-science": {
    label: "Data Science Portfolio",
    eyebrow: "Data Scientist · Python · SQL · Machine Learning",
    tagline: "Building end-to-end ML solutions — fraud detection, review prediction, forecasting, and explainable AI.",
    summary:
      "Aspiring Data Scientist with hands-on experience in Python, SQL, statistics, EDA, feature engineering, machine learning, anomaly detection, explainable AI, and Streamlit deployment. Focused on building practical predictive solutions from raw data to usable applications.",
    aboutHighlights: [
      "Python, SQL, Pandas, NumPy, EDA and feature engineering",
      "Classification, forecasting, anomaly detection and model evaluation",
      "SHAP explainability and Streamlit deployment for practical ML solutions",
    ],
    stats: [
      { value: "3", label: "ML Projects" },
      { value: "85.26%", label: "Best Accuracy" },
      { value: "SHAP", label: "Explainable AI" },
      { value: "Streamlit", label: "Deployment" },
    ],
  },
} as const;

export const projects = {
  analytics: [
    {
      number: "01",
      title: "Cloud Cost Intelligence",
      github: "https://github.com/Sumit006-coder-dotcom/cloud-cost-intelligence",
      subtitle: "SQL · EDA · Power BI · Forecasting · Anomaly Detection",
      description:
        "Built an end-to-end cloud cost analytics platform to understand spending patterns, identify cost drivers, forecast weekly costs, and surface unusual spending for optimization.",
      highlights: [
        "Performed data cleaning, EDA, SQL analysis and feature engineering",
        "Analyzed cost drivers, usage patterns, anomalies and optimization opportunities",
        "Built Power BI dashboards and a multi-page Streamlit analytics application",
      ],
      metric: { value: "E2E", label: "Cost Analytics" },
      icon: "cloud",
      flipped: false,
    },
    {
      number: "02",
      title: "UPI Fraud Shield",
      github: "https://github.com/Sumit006-coder-dotcom/UPI-Fraud-Shield-ML",
      subtitle: "Fraud Analytics · EDA · Risk Analysis · Dashboards",
      description:
        "Built a fraud analytics solution using transactional, behavioral, authentication, and account-level data to identify suspicious patterns and assess transaction risk.",
      highlights: [
        "Analyzed fraud rates, transaction trends, user behavior and risk patterns",
        "Performed data cleaning, aggregation, correlation analysis and EDA",
        "Added interactive analytics, fraud probability scoring and prediction history",
      ],
      metric: { value: "Risk", label: "Fraud Analytics" },
      icon: "fraud",
      flipped: true,
    },
    {
      number: "03",
      title: "E-Commerce Review Analytics",
      github: "https://github.com/Sumit006-coder-dotcom/E-Commerce-Customer-Review-Prediction",
      subtitle: "SQL · EDA · Customer Analysis · Machine Learning",
      description:
        "Analyzed order, payment, product, and delivery data to understand factors associated with customer review quality and support review prediction.",
      highlights: [
        "Performed data cleaning, EDA, SQL analysis and feature engineering",
        "Compared customer and delivery patterns linked to Good/Bad reviews",
        "Developed a Random Forest model and deployed the prediction pipeline with Streamlit",
      ],
      metric: { value: "91.04%", label: "F1-score" },
      icon: "ecommerce",
      flipped: false,
    },
  ],
  "data-science": [
    {
      number: "01",
      title: "UPI Fraud Shield",
      github: "https://github.com/Sumit006-coder-dotcom/UPI-Fraud-Shield-ML",
      subtitle: "Classification · SHAP · Risk Scoring · Streamlit",
      description:
        "Built an end-to-end fraud detection system using transactional, behavioral, authentication, and account-level features to assess UPI fraud risk.",
      highlights: [
        "Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting and MLP",
        "Evaluated models using Precision, Recall, F1-score, ROC-AUC and confusion matrices",
        "Added SHAP-based Explainable AI, fraud probability scoring and Streamlit deployment",
      ],
      metric: { value: "SHAP", label: "Explainable AI" },
      icon: "fraud",
      flipped: false,
    },
    {
      number: "02",
      title: "E-Commerce Customer Review Prediction",
      github: "https://github.com/Sumit006-coder-dotcom/E-Commerce-Customer-Review-Prediction",
      subtitle: "Classification · Feature Engineering · Model Evaluation",
      description:
        "Built an ML classification system to predict Good/Bad customer reviews from order, payment, product, and delivery data.",
      highlights: [
        "Performed preprocessing, EDA, feature engineering and model comparison",
        "Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting and XGBoost",
        "Random Forest achieved 85.26% accuracy, 91.04% F1-score and 79.92% ROC-AUC",
      ],
      metric: { value: "85.26%", label: "Accuracy" },
      icon: "ecommerce",
      flipped: true,
    },
    {
      number: "03",
      title: "Cloud Cost Intelligence",
      github: "https://github.com/Sumit006-coder-dotcom/cloud-cost-intelligence",
      subtitle: "Forecasting · Anomaly Detection · Feature Engineering",
      description:
        "Built a cloud cost ML workflow combining historical and lag-based features for weekly forecasting with Isolation Forest for unusual-spending detection.",
      highlights: [
        "Performed EDA, SQL analysis and feature engineering on cloud spending data",
        "Developed weekly cost forecasting using historical and lag-based features",
        "Combined Isolation Forest with business rules to flag unusual spending and risk",
      ],
      metric: { value: "ML", label: "Forecast + Anomaly" },
      icon: "cloud",
      flipped: false,
    },
  ],
} as const;
