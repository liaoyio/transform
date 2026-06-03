import React, { Fragment } from "react";
import { Heading, Pane, Text } from "evergreen-ui";
import { categorizedRoutes, Route } from "@utils/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBox from "@components/Searchbox";

function normalizePath(path?: string) {
  if (!path) return "/";

  const pathname = path.split("#")[0].split("?")[0];
  if (!pathname || pathname === "/") return "/";

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default function Navigator() {
  const router = useRouter();
  const activePath = normalizePath(router.asPath || router.pathname);

  return (
    <Pane
      width={240}
      height={"calc(100vh - 40px)"}
      borderRight
      display="flex"
      flexDirection="column"
      paddingTop={20}
      backgroundColor="#FFFFFF"
    >
      <Pane paddingX={15}>
        <SearchBox />
      </Pane>

      <Pane
        display="flex"
        flex={1}
        overflowY="scroll"
        flexDirection="column"
        paddingBottom={10}
      >
        {categorizedRoutes.map(route => {
          return (
            <Fragment key={route.category}>
              <Pane paddingX={10} marginTop={15} marginBottom={2}>
                <Heading marginLeft={5} size={400}>
                  {route.category}
                </Heading>
              </Pane>

              {[...(route.content as Route[])]
                .sort((a, b) =>
                  a.label === b.label ? 0 : a.label > b.label ? 1 : -1
                )
                .map((a: Route) => {
                  const isActive = activePath === normalizePath(a.path);
                  return (
                    <Link key={a.label} href={a.path} prefetch={false}>
                      <a
                        style={{
                          textDecoration: "none"
                        }}
                      >
                        <Pane
                          paddingLeft={16}
                          paddingY={3}
                          backgroundColor={isActive ? "#f3f3f3" : undefined}
                          borderLeft={
                            isActive
                              ? "3px solid #009688"
                              : "3px solid transparent"
                          }
                          css={{
                            "&:hover": {
                              backgroundColor: "#f5f5f5"
                            }
                          }}
                        >
                          <Text fontSize={13}>{a.label}</Text>
                        </Pane>
                      </a>
                    </Link>
                  );
                })}
            </Fragment>
          );
        })}
      </Pane>
    </Pane>
  );
}
