import React from 'react';
import { Code } from 'bright';

import theme from '@/constants/code-snippet-theme';

function CodeSnippet(props: any) {
	return <Code {...props} theme={theme} />;
}

export default CodeSnippet;
