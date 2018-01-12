---
id: documentation-generator
title: Documentation Generator
sidebar_label: Documentation Generator
---



# Dokka

Dokka is a documentation engine for Kotlin, performing the same function as javadoc for Java. Just like Kotlin itself, Dokka fully supports mixed-language Java/Kotlin projects. It understands standard Javadoc comments in Java files and [KDoc comments](https://kotlinlang.org/docs/reference/kotlin-doc.html) in Kotlin files, and can generate documentation in multiple formats including standard Javadoc, HTML and Markdown.

### Using Dokka

#### Using the Gradle plugin in Project Level

```android
buildscript {
	ext.dokka_version = '0.9.9'
    repositories {
        jcenter()
    }

    dependencies {
        classpath "org.jetbrains.dokka:dokka-gradle-plugin:${dokka_version}"
    }
}

apply plugin: 'org.jetbrains.dokka
```

#### Using the Gradle plugin in App Level

```android
task dokkaJavadoc(type: org.jetbrains.dokka.gradle.DokkaAndroidTask) {
    outputFormat = 'html'
    outputDirectory = "$buildDir/javadoc"
}
```

#### Compilation Process

In terminal run this command `gradlew dokkaJavadoc`  , After build generation document will generate in following folder : `app>build> javadoc >"generated documents"`.



