    import React from 'react';
    import { useLocation } from 'react-router-dom';

    interface RouteRendererProps {
      routes: { path: string; content: React.ReactNode }[];
    }

    const RouteRenderer: React.FC<RouteRendererProps> = ({ routes }) => {
      const location = useLocation();

      let content: React.ReactNode = '';

      const route = routes.find(
        (routeContent) => routeContent.path === location.pathname
      );

      if (route) {
        content = route.content;
      }

      return <>{content}</>;
    };

    export default RouteRenderer;
    
