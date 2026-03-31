import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-3xl mx-auto px-6 py-12 text-gray-600">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="italic text-gray-600 text-sm mb-4">
            Last updated: March 2026
          </p>
          <p className="text-gray-700 leading-relaxed">
            We don't collect anything. No accounts, no tracking, no servers.
            Your data stays on your device and your Google account — we never
            see it.
          </p>

          <h3 className="text-xl text-gray-800 mt-8 mb-2">
            What happens when you use the extension
          </h3>
          <p>
            When you write notes or change settings like your font or theme,
            that data is saved using Chrome's built-in storage. If you're signed
            into Chrome, Google automatically syncs it across your devices — the
            same way Chrome syncs your bookmarks. We have no access to this
            data, we can't read it, and we never receive it.
          </p>

          <h3 className="text-xl text-gray-800 mt-8 mb-2">
            Third party services
          </h3>
          <p>
            The extension itself has no third party services, analytics, or
            trackers built in.
          </p>
          <p>The only Google involvement is:</p>
          <ul className="list-disc ml-4">
            <li className="my-2">
              Chrome Storage Sync — stores your notes and settings in your own
              Google account
            </li>
            <li className="my-2">
              Chrome Web Store — Google collects standard install and usage
              stats on the store listing page, like any app store does
            </li>
          </ul>
          <p>
            Both are covered by{" "}
            <a
              className="underline"
              href="https://policies.google.com/privacy"
              target="_blank"
            >
              Google's Privacy Policy.
            </a>
          </p>

          <h3 className="text-xl text-gray-800 mt-8 mb-2">What we don't do</h3>
          <ul className="list-disc ml-4">
            <li className="my-2">
              Chrome Storage Sync — stores your notes and settings in your own
              Google account
            </li>
            <li className="my-2">We don't ask you to create an account</li>
            <li className="my-2">
              We don't collect your email or any personal information
            </li>
            <li className="my-2">We don't track how you use the extension</li>
            <li className="my-2">
              We don't have a server that receives your data
            </li>
            <li className="my-2">We don't use cookies</li>
            <li className="my-2">
              We don't sell or share anything — because there's nothing to share
            </li>
          </ul>

          <h3 className="text-xl text-gray-800 mt-8 mb-2">
            Legal basis (Art. 6 GDPR)
          </h3>
          <p>
            The extension does not process personal data. Chrome storage sync is
            handled entirely by Google under their own legal basis.
          </p>

          <h3 className="text-xl text-gray-800 mt-8 mb-2">Your rights</h3>
          <p>
            As a user you have the right to access, correct, and delete your
            data at any time. Since we hold no data about you, these rights
            apply directly to Google for any Chrome sync data.
          </p>
          <p>
            To delete all your data, simply uninstall the extension. You can
            also clear extension storage manually via Chrome settings.
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
