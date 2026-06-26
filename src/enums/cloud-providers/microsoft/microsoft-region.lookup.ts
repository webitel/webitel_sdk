const MicrosoftRegion = Object.freeze(
  [
    'Brazil South',
    'France Central',
    'South Africa North',
    'Australia East',
    'Canada Central',
    'Germany West Central',
    'Central India',
    'Central US',
    'North Europe',
    'Japan East',
    'East US',
    'Norway East',
    'Korea Central',
    'East US 2',
    'UK South',
    'Southeast Asia',
    'South Central US',
    'West Europe',
    'East Asia',
    'US Gov Virginia',
    'Sweden Central',
    'China North 3',
    'West US 2',
    'Switzerland North',
    'West US 3',
  ].map((name) => ({
    name,
    // @ts-ignore
    id: name.replaceAll(' ', '').toLowerCase(),
  }))
)

export default MicrosoftRegion
