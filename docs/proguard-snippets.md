---
id: proguard-snippets
title: Commonly used Proguard Snippets
sidebar_label: Proguard Snippets
---

Proguard removes unused code from your release build and reduces your APK size.



Proguard Files:

<AUTOGENERATED_TABLE_OF_CONTENTS>



### Enable Proguard

Check your app's `build.gradle` file and set `minifyEnabled` to `true` 

```groovy
android {
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'),
                    'proguard-rules.pro'
        }
    }
    ...
}
```



There are other ways also. You can use multiple proguard files as well and provide a path to it also. An example would look like this: 

```groovy
android {
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'),
                    'proguard-rules.pro'
            // library specific proguard files
            proguardFile 'proguard-glide.pro'
      	    proguardFile 'proguard-gson.pro' // etc..
        }
    }
    ...
}
```



If you have many proguard file like this, It may clutter your code and you can move all proguard files to a separate folder, let's say "proguard". For this to work, your proguard configurations would look like this:

```groovy
android {
    buildTypes {
        release {
            minifyEnabled true
            // specific proguard files
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro', fileTree(dir: 'proguards', include: '*.pro')
        }
    }
    ...
}
```



## Collection of Proguard Rules for Libraries: 

### `Retrofit`

```p
# -------------------- Retrofit --------------------
# Website: http://square.github.io/retrofit/
# URL: https://github.com/square/retrofit
# Proguard Files: https://github.com/square/retrofit#proguard
#           AND   http://square.github.io/retrofit/

-dontwarn okhttp3.**
-dontwarn javax.annotation.**

# Platform calls Class.forName on types which do not exist on Android to determine platform.
-dontnote retrofit2.Platform
# Platform used when running on Java 8 VMs. Will not be used at runtime.
-dontwarn retrofit2.Platform$Java8
# Retain generic type information for use by reflection by converters and adapters.
-keepattributes Signature
# Retain declared checked exceptions for use by a Proxy instance.
-keepattributes Exceptions

## It also includes okio
## Repo: https://github.com/square/okio

-dontwarn okio.**

# ---------------------------------------------------
```



### `Glide`
```p
# -------------------- Glide --------------------
# URL: https://github.com/bumptech/glide
# Proguard Files: https://github.com/bumptech/glide#proguard

-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.module.AppGlideModule
-keep public enum com.bumptech.glide.load.resource.bitmap.ImageHeaderParser$** {
  **[] $VALUES;
  public *;
}

# for DexGuard only
-keepresourcexmlelements manifest/application/meta-data@value=GlideModule

# ---------------------------------------------------
```



### `Google Maps Services`

```
# -------------------- Glide --------------------
# URL: https://github.com/googlemaps/google-maps-services-java
# Source not available, found by error analysis

##(for (directions api) compile 'com.google.maps:google-maps-services:0.1.20')

-keep class com.google.appengine.** { *; }
-keep class com.google.maps.** { *; }
-dontwarn com.google.appengine.**
-keep class org.joda.time.** { *; }
-dontwarn org.joda.time.**

##https://github.com/googlemaps/google-maps-services-java/issues/102

-keep class org.joda.** { *; }
-dontwarn org.joda.convert.**

# ---------------------------------------------------
```



### `Google Maps`

```
#--------------------------- Google Maps ----------------------------

# Proguard Source: https://github.com/googlemaps/android-samples/blob/master/ApiDemos/app/proguard-rules.pro

# This is experimental - Please provide any additional details if you know

# The Maps API uses custom Parcelables.
# Use this rule (which is slightly broader than the standard recommended one)
# to avoid obfuscating them.
-keepclassmembers class * implements android.os.Parcelable {
    static *** CREATOR;
}

# The Maps API uses serialization.
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

```
