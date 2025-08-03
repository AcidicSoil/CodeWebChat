# How to Create a Pull Request for the Custom GPT URL Feature

This is a step-by-step guide to creating a professional pull request to merge your new feature into the original `robertpiosik/CodeWebChat` repository.

---

### Step 1: Create a New Branch for Your Feature

You should never commit directly to your `main` branch. Creating a dedicated "feature branch" keeps your work organized and makes the pull request clean.

In your terminal, run this command from the project root:
```bash
git checkout -b feature/custom-gpt-url
```

---

### Step 2: Stage and Commit Your Changes

Gather all the changes we've made and commit them to this new branch.

1.  **Check the status** to see all the files we've modified:
    ```bash
    git status
    ```
2.  **Add all the changes** to the staging area:
    ```bash
    git add .
    ```
3.  **Commit the changes** with a clear, descriptive message. A good commit message is crucial.

    ```bash
    git commit -m "feat: Add user-configurable Custom GPT URL

    Implements a new feature allowing users to define their own custom
    ChatGPT URL via the VS Code settings.

    - Adds a `codeWebChat.customGptUrl` setting.
    - Modifies the chat initialization logic to use this setting when the
      'ChatGPT Custom' provider is selected.
    - Adds 'ChatGPT Custom' to the default preset list for discoverability.
    - Generalizes the browser extension manifest to support any custom GPT URL."
    ```

---

### Step 3: Push Your Branch to Your Fork on GitHub

Send your new branch and its commit from your local computer up to your forked repository on GitHub.

```bash
git push origin feature/custom-gpt-url
```
*(This assumes `origin` is the name of the remote pointing to your fork, which is the default.)*

---

### Step 4: Open the Pull Request on GitHub

1.  **Go to your forked repository** on the GitHub website (e.g., `https://github.com/your-username/CodeWebChat`).
2.  GitHub will likely see the new branch you just pushed and display a prominent green button that says **"Compare & pull request"**. Click it.
3.  If you don't see the button, go to the "Pull requests" tab and click "New pull request".
4.  **Configure the PR:**
    *   **Base repository:** This should be the original project: `robertpiosik/CodeWebChat`.
    *   **Base branch:** This should be their main branch, likely `main` or `master`.
    *   **Head repository:** This should be your fork: `your-username/CodeWebChat`.
    *   **Compare branch:** This should be your new branch: `feature/custom-gpt-url`.

---

### Step 5: Write a Great PR Description

This is your chance to explain your changes to the maintainers. A good description makes it much more likely your PR will be reviewed and accepted. You can use the text below as a template.

**Title:** `feat: Add user-configurable Custom GPT URL`

**Body/Description:**
```markdown
#### What does this PR do?
This pull request introduces a new feature that allows users to configure a custom ChatGPT URL (for use with custom GPTs) directly in the VS Code settings. This removes the need to hardcode URLs and makes the extension much more flexible.

#### Key Changes:
- A new setting, `codeWebChat.customGptUrl`, has been added where users can input their full custom GPT endpoint.
- The "ChatGPT Custom" provider is now included in the default presets, making the feature easily discoverable.
- The extension logic now reads from this new setting when the "ChatGPT Custom" provider is used. If the setting is empty, it prompts the user to configure it.
- The browser extension's manifest has been updated to use a general `https://chatgpt.com/g/*` matcher, allowing it to work with any custom GPT.

#### How to test this feature:
1.  Run the extension in debug mode.
2.  Go to VS Code Settings (`Ctrl + ,`) and search for "Custom GPT URL".
3.  Enter a valid custom GPT URL in the text box.
4.  In the Code Web Chat sidebar, select the "ChatGPT Custom" preset from one of the chat modes.
5.  Send a prompt. The extension should open a new browser tab to the exact URL you configured in the settings.
```

---

### Step 6: Submit and Wait for Review

Click the "Create pull request" button. The project's maintainers will be notified and will review your code. Be prepared to answer questions or make further changes based on their feedback.
