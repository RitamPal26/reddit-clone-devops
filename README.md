# CI/CD Pipeline to Deploy Reddit Clone on AWS

A cloud-native Reddit Clone deployed using a fully automated CI/CD pipeline with Kubernetes, Jenkins, ArgoCD, and AWS infrastructure.

---

## Project Overview

This project demonstrates the end-to-end development, automation, and deployment of a Reddit-like web application using a modern DevOps toolchain and AWS cloud services. The application is built as a set of microservices, each containerized and orchestrated via Kubernetes (AWS EKS). The CI/CD pipeline ensures rapid, secure, and automated deployments, minimizing manual intervention and enabling continuous delivery[1].

---

## Features

- **Reddit-like Functionality:** User authentication, post creation, upvoting/downvoting, commenting, and community management—implemented as independent microservices[1].
- **Microservices Architecture:** Each feature is a separate service, allowing modularity and independent scaling[1].
- **CI/CD Automation:** End-to-end automation from code commit to deployment using Jenkins, Docker, and ArgoCD[1].
- **Code Quality & Security:** Integrated static code analysis with SonarQube to enforce high code quality and security standards[1].
- **Observability:** Real-time monitoring and dashboards using Prometheus and Grafana[1].
- **Scalability & High Availability:** Deployed on AWS EKS with Kubernetes auto-scaling and AWS-managed infrastructure[1].
- **GitOps Workflow:** Declarative, version-controlled deployments managed by ArgoCD[1].
- **Infrastructure as Code:** All infrastructure (EC2, EKS, IAM, etc.) provisioned using Terraform and Helm[1].
- **Role-Based Access Control:** Secure access management via Kubernetes RBAC and AWS IAM policies[1].

---

## Tech Stack

| Layer                  | Tools/Services Used                |
|------------------------|------------------------------------|
| Source Control         | GitHub                             |
| CI/CD Automation       | Jenkins, ArgoCD                    |
| Containerization       | Docker, AWS ECR                    |
| Orchestration          | Kubernetes (AWS EKS), Helm         |
| Monitoring             | Prometheus, Grafana                |
| Code Quality           | SonarQube                          |
| Infrastructure as Code | Terraform, Helm                    |
| Security               | Kubernetes RBAC, AWS IAM           |

---

## Architecture

The architecture follows a modular, cloud-native approach:

1. **Source Code Management:** Code is hosted on GitHub. Every commit triggers the pipeline via webhooks[1].
2. **Continuous Integration:** Jenkins pulls code, runs tests, performs static code analysis (SonarQube), builds Docker images, and pushes them to AWS ECR[1].
3. **Continuous Deployment:** Helm charts define Kubernetes resources. ArgoCD syncs the latest changes from GitHub to AWS EKS, ensuring GitOps-based deployments[1].
4. **Monitoring:** Prometheus scrapes metrics from services and nodes; Grafana visualizes these metrics with real-time dashboards[1].
5. **Security:** Access to all resources is controlled via RBAC and IAM policies[1].

---

## Setup Instructions

**1. Infrastructure Provisioning**
- Use Terraform to provision an AWS EC2 instance (for Jenkins, SonarQube, Docker) and an AWS EKS cluster for Kubernetes workloads[1].
- Configure IAM roles and VPC networking as required.

**2. Jenkins & SonarQube Setup**
- Install Jenkins and SonarQube on the EC2 instance (automated via user-data scripts in Terraform)[1].
- Configure Jenkins with required plugins, credentials (AWS, GitHub), and connect to SonarQube for code analysis[1].
- Set up a Jenkins Pipeline (using a `Jenkinsfile` in your repo) with stages for checkout, SonarQube analysis, Docker build, ECR push, and ArgoCD deployment[1].

**3. Dockerization**
- Containerize each microservice using Docker. Push images to AWS ECR as part of the CI pipeline[1].

**4. Kubernetes Deployment**
- Define Kubernetes resources (Deployments, Services, Ingress, etc.) using Helm charts[1].
- Use ArgoCD to automate GitOps-based deployments from GitHub to AWS EKS[1].

**5. Monitoring & Observability**
- Install Prometheus and Grafana on your EKS cluster using Helm[1].
- Configure dashboards for application and infrastructure metrics[1].

**6. Security**
- Enforce access controls using Kubernetes RBAC and AWS IAM[1].
- Manage secrets using Kubernetes Secrets and IAM roles[1].

**7. Testing**
- Functional, integration, and load testing are performed automatically in the pipeline and manually using tools like Postman and k6[1].

---

## DevOps Pipeline Flow

1. **Code Commit:** Developer pushes code to GitHub.
2. **CI Trigger:** GitHub webhook triggers Jenkins.
3. **Build & Test:** Jenkins runs tests, SonarQube analysis, and builds Docker images.
4. **Image Push:** Docker images are pushed to AWS ECR.
5. **CD Trigger:** Jenkins updates Helm charts in the GitHub repo; ArgoCD detects changes and deploys to EKS.
6. **Post-Deployment Validation:** Automated and manual tests run; monitoring is updated.
7. **Feedback:** Developers receive notifications via email and dashboards[1].

![image](https://github.com/user-attachments/assets/bcfc6ea7-ee14-41fb-a3d5-d3069c022d03)

---

## Key Challenges & Solutions

| Challenge                                   | Solution                                                                 |
|----------------------------------------------|--------------------------------------------------------------------------|
| EKS cluster bootstrapping                    | Used `eksctl` and Terraform for repeatable, automated setup              |
| Helm chart customization                     | Modular Helm charts with environment-specific values                     |
| ArgoCD image updates                         | Integrated `argocd-image-updater` for automatic tag syncing              |
| Jenkins-Kubernetes integration               | Used Kubernetes Secrets and PVCs for secure credential management        |
| Monitoring setup                             | Deployed `kube-prometheus-stack` and custom Grafana dashboards           |
| SonarQube pipeline integration               | Dedicated Jenkins stage and enforced quality gates                       |

---

## Future Enhancements

- **Automated Testing:** Deeper integration of unit, integration, and API tests within the pipeline.
- **Advanced Deployment Strategies:** Blue-green and canary deployments using Argo Rollouts.
- **Multi-Environment Support:** Isolated dev, staging, and prod environments via namespaces or clusters.
- **Enhanced Observability:** Real-time alerting and distributed tracing (Jaeger, OpenTelemetry).
- **Improved Security:** Application-level RBAC, secrets management with AWS Secrets Manager or Vault.
- **Frontend Expansion:** Build a user-friendly frontend with React.js or Vue.js; consider mobile support[1].

---

## Outcome

![image](https://github.com/user-attachments/assets/4f34e6fa-61bc-4fd7-900d-5c172168f7aa)

![image](https://github.com/user-attachments/assets/cc553dc9-230e-4833-84a7-5a5788a9d82f)

![image](https://github.com/user-attachments/assets/0e0be0fc-7dc4-4e9e-8ef1-e5613ec06b46)

![image](https://github.com/user-attachments/assets/b56b509d-1d19-45c9-8d84-1208324697c3)

![image](https://github.com/user-attachments/assets/f477992d-b25f-489b-916e-49f130b9f5ac)

![image](https://github.com/user-attachments/assets/e2a9274d-e3b5-4f2a-bca2-2a88736e0d22)

![image](https://github.com/user-attachments/assets/c9f38f62-2a9c-4c67-96ca-b6a853e7523f)

![image](https://github.com/user-attachments/assets/b7bda929-f696-45f3-89df-7d0432e2db50)

![image](https://github.com/user-attachments/assets/eba17e92-68be-4d6d-b78c-f7fdad4e3e89)

![image](https://github.com/user-attachments/assets/9a7b01ce-f572-4fc6-94b8-242ae5835f00)

![image](https://github.com/user-attachments/assets/d6f8ccc0-528a-4796-b3c5-547adf9a44d2)

![image](https://github.com/user-attachments/assets/c1937bf9-a686-4a64-a90c-4ba215edd07e)


---

## Gitops Repository

https://github.com/RitamPal26/reddit-clone-gitops.git

---

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

---


**Authors:**  
Akash Jain(https://github.com/spaaxrks) 
Ritam Pal  

---
