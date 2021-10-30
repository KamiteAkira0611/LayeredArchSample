import React, { Suspense, Fragment, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router';

type routeType = {
  path?: string
  exact?: boolean
  guard?: React.VFC
  layout?: React.VFC
  component?: any
  routes?: any
}

export const renderRoutes = (routes: any) => (
  <Suspense fallback={<p>loading</p>}>
    <Switch>
      {routes.map((route: routeType) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: "*",
    // layout: MainLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("src/pages/root/App")),
      },
      {
        exact: true,
        path: "/recipes",
        component: lazy(() => import("src/pages/recipes")),
      },
      {
        component: () => <Redirect to="/" />,
      },
    ],
  },
]

export default routes
