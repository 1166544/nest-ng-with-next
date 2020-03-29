import React from 'react';

interface InitialProps {
  query: any;
}

interface Props extends InitialProps {
  title: string;
  content: string;
}

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    // tslint:disable-next-line: no-console
    // console.log('query...', query);

    return query;
  }

  public render() {
    // tslint:disable-next-line: no-console
    console.log('query...', this.props);

    return (<div><a>{this.props.title}</a></div>);
  }
}

export default Index;
