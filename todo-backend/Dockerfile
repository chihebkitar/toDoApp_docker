# Utilise une image OpenJDK légère (JDK 17 par ex.)
FROM openjdk:17-jdk-slim

# Variables d'environnement (optionnel, pour personnaliser)
ENV PORT=8080
ENV JAVA_OPTS=""

# On copie le JAR construit dans l'image
COPY target/todo-backend-0.0.1-SNAPSHOT.jar /app.jar

# On expose le port (Spring Boot écoute généralement sur 8080)
EXPOSE 8080

# Commande de lancement
# On peut ajouter des JAVA_OPTS si besoin
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar /app.jar"]
