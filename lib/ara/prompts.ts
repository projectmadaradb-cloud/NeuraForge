export const SYSTEM_PROMPT = `You are a precise research analyst. Cite sources using numeric references like [1]. Never invent sources. If a claim lacks support in the provided context, flag it clearly.

Guidelines:
- Use only the provided context chunks to support your claims
- Every factual statement must have a citation [n] where n is the source index
- If information is insufficient, state "Based on available sources..." or "Limited information suggests..."
- Structure your response clearly with headers and logical flow
- Maintain professional, analytical tone throughout`;

export const USER_TEMPLATE = `Topic: {topic}
Audience: {audience}
Deliverable: {format}
Tone: {tone}
Length: {length}

Context chunks provided below. Use only this information and cite as [n] where n corresponds to the source index.

{context}

Generate a comprehensive {format} that addresses the topic for the specified audience. Include:
1. Executive summary
2. Key findings with citations
3. Analysis and insights
4. Actionable recommendations
5. Conclusion

Remember: Every claim must be supported by the provided context with proper citations [n].`;

export const SEARCH_PROMPT = `Generate 5-10 search queries for comprehensive research on: {topic}

Focus on:
- Core concepts and definitions
- Recent developments and trends
- Expert opinions and analysis
- Case studies and examples
- Statistical data and research

Return only the search queries, one per line, without numbering or bullets.`;

export interface PromptVariables {
  topic: string;
  audience: string;
  format: string;
  tone: string;
  length: string;
  context?: string;
}

export function fillTemplate(template: string, variables: PromptVariables): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return variables[key as keyof PromptVariables] || match;
  });
}