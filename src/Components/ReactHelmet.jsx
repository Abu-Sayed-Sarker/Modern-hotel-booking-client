import { Helmet } from "react-helmet"
// eslint-disable-next-line react/prop-types
const ReactHelmet = ({ tittle }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{tittle}</title>
        </Helmet>
    );
};

export default ReactHelmet;