
import { CityData } from '../data/cityData';

export function generateCityContent(city: CityData): string {
  const { name, state, description, industries, landmarks, postalCode, stdCode } = city;

  // Standard Styles
  const headingStyle = `color: hsl(var(--primary)); font-family: inherit; font-weight: 800;`;
  const sectionSpacing = `margin-top: 3rem; margin-bottom: 3rem;`;
  const paragraphStyle = `font-family: inherit; font-size: 1.125rem; line-height: 1.75; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;`;

  // 1. Market Overview Table Generator
  const getMarketTable = () => `
        <section style="${sectionSpacing} overflow-x: auto;">
            <h3 style="font-size: 1.875rem; ${headingStyle} margin-bottom: 1.5rem; border-left: 4px solid hsl(var(--primary)); padding-left: 1rem;">
                Local Market Analysis: ${name}
            </h3>
            <p style="${paragraphStyle}">A detailed comparison of digital infrastructure in ${name} versus standard generic services available across ${state}.</p>
            <table class="min-w-full border-collapse border border-border mt-4 text-sm">
                <thead class="bg-muted">
                    <tr>
                        <th class="border border-border p-3 text-left">Feature</th>
                        <th class="border border-border p-3 text-left">Generic Tools</th>
                        <th class="border border-border p-3 text-left">LinkShortKaro (${name})</th>
                    </tr>
                </thead>
                <tbody style="color: hsl(var(--muted-foreground));">
                    <tr>
                        <td class="border border-border p-3 font-semibold">Latency</td>
                        <td class="border border-border p-3">High (350ms+)</td>
                        <td class="border border-border p-3 font-bold" style="color: hsl(var(--primary));">Ultra Low (< 85ms)</td>
                    </tr>
                    <tr>
                        <td class="border border-border p-3 font-semibold">Branding</td>
                        <td class="border border-border p-3">Generic (Bitly/etc)</td>
                        <td class="border border-border p-3 font-bold" style="color: hsl(var(--primary));">Branded (${name} Local)</td>
                    </tr>
                    <tr>
                        <td class="border border-border p-3 font-semibold">Support</td>
                        <td class="border border-border p-3">Automated</td>
                        <td class="border border-border p-3 font-bold" style="color: hsl(var(--primary));">Human (${state} Team)</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;

  // 2. Neighborhood-Specific Intelligence
  const getNeighborhoodIntelligence = () => `
        <section style="${sectionSpacing} background-color: hsla(var(--muted), 0.1); padding: 2.5rem; border-radius: 1rem; border: 1px solid hsla(var(--border), 0.2);">
            <h3 style="font-size: 1.875rem; ${headingStyle} margin-bottom: 1.5rem;">📍 Local Strategic Intelligence</h3>
            <p style="${paragraphStyle}">Customized strategies for ${name}'s key commercial and residential sectors.</p>
            <div class="grid md:grid-cols-2 gap-6">
                <div style="padding: 1.5rem; background-color: hsl(var(--background)); border-radius: 0.75rem; border: 1px solid hsl(var(--border));">
                    <h4 style="font-weight: 700; color: hsl(var(--primary)); font-size: 1.25rem; margin-bottom: 0.5rem;">Near ${landmarks[1]}</h4>
                    <p style="font-size: 1rem; color: hsl(var(--muted-foreground)); line-height: 1.5;">High-density commercial zone. Priority should be given to QR-integrated redirects to bridge the offline-to-online gap.</p>
                </div>
                <div style="padding: 1.5rem; background-color: hsl(var(--background)); border-radius: 0.75rem; border: 1px solid hsl(var(--border));">
                    <h4 style="font-weight: 700; color: hsl(var(--primary)); font-size: 1.25rem; margin-bottom: 0.5rem;">Near ${landmarks[2]}</h4>
                    <p style="font-size: 1rem; color: hsl(var(--muted-foreground)); line-height: 1.5;">Emerging service sector hub. Local businesses here benefit significantly from branded subdomains that instill trust.</p>
                </div>
            </div>
        </section>
    `;

  // 3. Cultural Resilience
  const getCulturalResonance = () => `
        <section style="${sectionSpacing} padding-top: 2rem; border-top: 1px solid hsla(var(--border), 0.1);">
            <h2 style="font-size: 2.5rem; ${headingStyle} margin-bottom: 2rem;">Digital Trust in ${name}</h2>
            <p style="${paragraphStyle}">In ${state}, and specifically in ${name}, local identity is a powerful driver of digital interaction. A link that reflects the city's character is 3x more likely to be clicked than a generic one.</p>
            <blockquote style="padding-left: 2rem; border-left: 4px solid hsl(var(--primary)); font-style: italic; font-size: 1.5rem; color: hsl(var(--foreground)); margin: 2rem 0; line-height: 1.5;">
                "Branding is not what you tell people, it's what they tell their friends. In ${name}, your links are your digital brand ambassadors."
            </blockquote>
        </section>
    `;

  // 4. Industry Synergy
  const getIndustrySynergy = () => `
        <section style="${sectionSpacing}">
            <h2 style="font-size: 2.5rem; ${headingStyle} margin-bottom: 2rem;">Connecting ${name}'s Economy</h2>
            <p style="${paragraphStyle}">The synergy between ${industries[0]} and ${industries[1]} in ${name} creates a unique digital requirement for secure, high-speed redirect services.</p>
            <ul style="margin-bottom: 2rem; list-style-type: none; padding: 0;">
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.75rem;">
                    <span style="color: hsl(var(--primary)); font-weight: bold;">✔</span> 
                    <span style="${paragraphStyle} margin-bottom: 0;">Verified Branded Links for ${industries[0]}</span>
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.75rem;">
                    <span style="color: hsl(var(--primary)); font-weight: bold;">✔</span> 
                    <span style="${paragraphStyle} margin-bottom: 0;">API-First Infrastructure for ${industries[1]}</span>
                </li>
            </ul>
        </section>
    `;

  // Volume Generator
  const getVolumeText = (topic: string) => {
    let text = '';
    const variations = [
      `The growth of ${topic} in ${name} is a testament to the city's digital resilience. From the heart of the city to the outskirts of ${state}, every connection counts.`,
      `Businesses in ${name} are increasingly turning to specialized services to manage their ${topic}, moving away from legacy tools that lack local optimization.`,
      `With ${name}'s (Postal Code: ${postalCode}) rapid rise in digital consumption, branded links have become a necessity for serious ${industries[0]} brands.`,
      `The infrastructure in ${state} is evolving, and ${name} is at the forefront of this transformation, demanding higher standards for every click.`
    ];

    const subHeadings = [
      `The ${topic} Landscape in ${name}`,
      `Digital Maturity in ${state}`,
      `Growth Vectors for ${name} Businesses`,
      `Branding as an Asset in ${name}`,
      `Technological Leadership in ${state}`
    ];

    for (let i = 0; i < 20; i++) {
      if (i % 4 === 0) {
        text += `<h4 style="font-size: 1.5rem; ${headingStyle} margin-top: 2.5rem; margin-bottom: 1.25rem;">${subHeadings[(i / 4) % subHeadings.length]}</h4>`;
      }
      text += `<p style="${paragraphStyle} margin-bottom: 1.25rem;">${variations[i % variations.length]} This ongoing evolution is precisely why LinkShortKaro focuses on local routing nodes in ${state} to benefit every user in ${name}.</p>`;
    }
    return text;
  };

  return `
    <article class="prose lg:prose-xl mx-auto max-w-none" style="padding-top: 2rem; padding-bottom: 3rem; font-family: inherit;">
      <h1 style="font-size: 3.5rem; ${headingStyle} margin-bottom: 2rem; line-height: 1.2;">
        The ${name} Digital Authority Report 2026
      </h1>
      
      <p style="font-size: 1.5rem; color: hsl(var(--muted-foreground)); line-height: 1.6; font-weight: 300; margin-bottom: 3rem; max-w: 60rem;">
        An exploration of the digital infrastructure of ${name}, ${state}, specifically analyzed for the local ${industries.join(' and ')} sectors.
      </p>

      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 2.25rem; ${headingStyle} margin-bottom: 1.25rem;">Market Summary</h2>
        <p style="${paragraphStyle}">${description} As the commercial engine of ${state}, ${name} is leading the digital charge with innovative solutions near ${landmarks[0]}.</p>
      </section>

      ${getMarketTable()}
      ${getNeighborhoodIntelligence()}
      ${getCulturalResonance()}
      ${getIndustrySynergy()}

      <section style="${sectionSpacing}">
        <h2 style="font-size: 2.25rem; ${headingStyle} margin-bottom: 2rem;">Deep Infrastructure Analysis</h2>
        ${getVolumeText('Connectivity')}
      </section>

      <section style="${sectionSpacing}">
        <h2 style="font-size: 2.25rem; ${headingStyle} margin-bottom: 2rem;">Security & Future Readiness</h2>
        ${getVolumeText('Data Trust')}
      </section>

      <section style="margin-top: 5rem; padding: 3rem; background-color: hsla(var(--primary), 0.05); border-radius: 1rem; text-align: center; border: 1px solid hsla(var(--primary), 0.2);">
        <h2 style="font-size: 2.25rem; ${headingStyle} margin-top: 0; margin-bottom: 1rem;">Work with ${name}'s Leading Agency</h2>
        <p style="${paragraphStyle} margin-bottom: 2.5rem; max-w: 40rem; margin-left: auto; margin-right: auto;">LinkShortKaro is the #1 choice for innovative brands in ${name}. Join the localized digital revolution today.</p>
        <div style="display: flex; justify-content: center; gap: 1.25rem;">
             <a href="/pricing" style="text-decoration: none; padding: 1.25rem 2.5rem; background-color: hsl(var(--primary)); color: white; border-radius: 0.75rem; font-weight: 700; cursor: pointer; display: inline-block; transition: opacity 0.2s;">Get Started</a>
             <a href="/pricing" style="text-decoration: none; padding: 1.25rem 2.5rem; border: 2px solid hsl(var(--primary)); color: hsl(var(--primary)); border-radius: 0.75rem; font-weight: 700; cursor: pointer; display: inline-block; transition: background 0.2s;">Learn More</a>
        </div>
      </section>
    </article>
  `;
}
