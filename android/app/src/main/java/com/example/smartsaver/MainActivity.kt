package com.example.smartsaver

import android.os.Build
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.view.WindowInsetsControllerCompat
import com.example.smartsaver.ui.theme.SmartSaverTheme

class MainActivity : ComponentActivity() {

  private var insetsController: WindowInsetsControllerCompat? = null
  private var isDark by mutableStateOf(false)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    insetsController = WindowInsetsControllerCompat(window, window.decorView)
    applyStatusBar(false)

    enableEdgeToEdge()

    setContent {
      SmartSaverTheme {
        // Reactive surface color behind status bar for Android 15 (Samsung S25, etc.)
        val surfaceColor = if (isDark) Color(0xFF070B14) else Color(0xFFF8FAFC)

        Surface(
          modifier = Modifier.fillMaxSize(),
          color = surfaceColor
        ) {
          Box(modifier = Modifier.safeDrawingPadding()) {
            WebViewScreen(
              url = "file:///android_asset/index.html",
              onThemeChanged = { dark ->
                runOnUiThread { applyStatusBar(dark) }
              }
            )
          }
        }
      }
    }
  }

  @Suppress("DEPRECATION")
  private fun applyStatusBar(dark: Boolean) {
    isDark = dark
    insetsController?.isAppearanceLightStatusBars = !dark

    if (Build.VERSION.SDK_INT < 35) {
      window.statusBarColor = if (dark)
        android.graphics.Color.parseColor("#070b14")
      else
        android.graphics.Color.parseColor("#f8fafc")
    }
  }
}

class ThemeBridge(private val onThemeChanged: (Boolean) -> Unit) {
  @JavascriptInterface
  fun setDarkMode(isDark: Boolean) {
    onThemeChanged(isDark)
  }
}

@Composable
fun WebViewScreen(url: String, onThemeChanged: (Boolean) -> Unit) {
  AndroidView(
    modifier = Modifier.fillMaxSize(),
    factory = { context ->
      WebView(context).apply {
        layoutParams = ViewGroup.LayoutParams(
          ViewGroup.LayoutParams.MATCH_PARENT,
          ViewGroup.LayoutParams.MATCH_PARENT
        )
        webViewClient = WebViewClient()
        webChromeClient = WebChromeClient()
        addJavascriptInterface(ThemeBridge(onThemeChanged), "AndroidBridge")
        settings.apply {
          javaScriptEnabled = true
          domStorageEnabled = true
          allowFileAccess = true
          allowContentAccess = true
          databaseEnabled = true
          mixedContentMode = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE
        }
        loadUrl(url)
      }
    }
  )
}
