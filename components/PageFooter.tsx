import ExternalLink from "@/components/ExternalLink";

export default function PageFooter() {
  return (
    <footer className={"border-t-4 border-t-grey-1 mt-4 mb-4 pt-4 space-y-3"}>
      <div className={"flex justify-center text-main "}>
        <div>
          Built with NextJS and mantained by{" "}
          <ExternalLink href={"https://nilshartmann.net"}>
            Nils Hartmann
          </ExternalLink>{" "}
          |{" "}
          <ExternalLink href={"https://twitter.com/nilshartmann"}>
            Twitter
          </ExternalLink>{" "}
          |{" "}
          <ExternalLink href={"https://norden.social/@nilshartmann"}>
            Mastodon
          </ExternalLink>{" "}
          |{" "}
          <ExternalLink
            href={"https://www.linkedin.com/in/nils-hartmann-2a5738252/"}
          >
            LinkedIn
          </ExternalLink>
        </div>
      </div>
      <div className={"flex justify-center"}>
        <span>
          Thanks to all contributors! ❤️ If you have something to add, please
          let me know by submitting an{" "}
          <ExternalLink
            href={"https://github.com/nilshartmann/react-component-libs/issues"}
          >
            issue
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink
            href={"https://github.com/nilshartmann/react-component-libs/pulls"}
          >
            Pull request
          </ExternalLink>{" "}
          in the{" "}
          <ExternalLink
            href={"https://github.com/nilshartmann/react-component-libs"}
          >
            GitHub Repo
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
}
