pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'chittaranjan27/frontend-app'
        BACKEND_IMAGE = 'chittaranjan27/backend-app'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[url: 'https://github.com/Chittaranjan2707/BlogApplication.git']]
                ])
            }
        }
        stage('Docker Cleanup') {
            steps {
                script {
                    // Clean up Docker containers, volumes, and networks to ensure a fresh start
                    sh 'docker container prune -f'
                    sh 'docker volume prune -f'
                    sh 'docker network prune -f'
                    sh 'docker image prune -f'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    docker.build("$FRONTEND_IMAGE", "./front")
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    docker.build("$BACKEND_IMAGE", "./back")
                }
            }
        }

        stage('Push Docker Images to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DockerHubCred') {
                        docker.image("$FRONTEND_IMAGE").push('latest')
                        docker.image("$BACKEND_IMAGE").push('latest')
                    }
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                withCredentials([string(credentialsId: 'ansible_become_pass', variable: 'SUDO_PASS')]) {
                    ansiblePlaybook(
                        playbook: 'deploy.yml',
                        inventory: 'hosts.ini',
                        become: true,
                        becomeUser: 'root',
                        extraVars: [
                            ansible_become_pass: SUDO_PASS
                        ]
                    )
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
